from pprint import pprint
import boto3
from boto3.dynamodb.types import TypeDeserializer
import time
import os
import json
#0 = pendente 1 = aceito 2 = bloqueado

TABLE_NAME = os.environ["TABLE_NAME"] if "TABLE_NAME" in os.environ  else 'devices' 

#status
PENDING = 0
APROVED = 1
BLOCKED =2

#direcao
ENTRY = 0
EXIT = 1

deserializer = TypeDeserializer()

class Device:
    def __init__(self,uid,name,status=PENDING,createdAt=time.time(),accesses=[]):
        self.uid = uid
        self.name = name
        self.status = status
        self.createdAt = int(createdAt)
        self.accesses = accesses

    def addAccess(self,timestamp):
        self.accesses.append(timestamp)
    
    def serialize(self):
        return {
                'uid': self.uid,
                'name': self.name,
                'status': self.status,
                'createdAt': self.createdAt,
                'accesses': [int(i) for i in self.accesses]
            }
    def display(self):
        return print(self.serialize())

    @staticmethod
    def unserialize(objectData):
        print(objectData)
        
        return Device(
            uid=int(objectData["uid"]),
            name=str(objectData["name"]),
            status=int(objectData["status"]),
            createdAt=int(objectData["createdAt"]),
            accesses=[int(i) for i in objectData["accesses"]]
        )


class Device_table_DB:
    def __init__(self):
        self.dynamodb = boto3.resource('dynamodb')
        self.table = self.dynamodb.Table(TABLE_NAME)

    def register_device(self,uid,nome):
        device_dict = Device(uid,nome,status=PENDING,createdAt=time.time()).serialize()
        response = self.table.put_item(Item=device_dict)
        return response

    def read_device(self,uid):
        response = self.table.get_item(Key={'uid': uid})
        if 'Item' in response:
            return Device.unserialize(response.get("Item"))
        else:
            return None

    def getAllItens(self):
        return [ Device.unserialize(i) for i in self.table.scan()['Items'] ]

    def removeItem(self,uid):
        response = self.table.delete_item(Key={"uid":uid})
        return response

    def addAccess(self,uid):
        device = self.read_device(uid)
        device.addAccess(int(time.time()))
        response = self.table.put_item(Item=device.serialize())
        return response

    def updateStatus(self,uid,status):
        device = self.read_device(uid)
        device.status = status
        response = self.table.put_item(Item=device.serialize())
        return response


if __name__ == '__main__':
    cursor = Device_table_DB()
    cursor.register_device(0,"esoj")
    print("inserido")
    d=cursor.addAccess(0)
    (cursor.read_device(0)).display()


    
