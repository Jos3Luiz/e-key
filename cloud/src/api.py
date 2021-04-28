from database import *

#recives uid and return a json with the object status
def getStatus(uid):
    cursor = Device_table_DB()
    device =  cursor.read_device(uid)
    if device!=None:
        return device.serialize(),200
    else:
        return {},404

#request registration
def register(uid,name):
    cursor = Device_table_DB()
    cursor.register_device(uid,name)
    return {},200

#list all devices on the server
def listDevices():
    cursor = Device_table_DB()
    return [ device.serialize() for device in cursor.getAllItens()],200

#remove item from database
def remove(uid):
    cursor = Device_table_DB()
    cursor.removeItem(uid)
    return {},200

#update status for a card
def setStatus(uid,status):
    cursor = Device_table_DB()
    cursor.updateStatus(uid,status)
    return {},200




