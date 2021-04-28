#!/usr/bin/python3
#import hashlib
import requests

from requests.api import head
#commands = ['help','testServer','listDevices','statusDevice','authorizeDevice','exit']

class admin:
    def __init__(self):
        file=open("serverLink", mode="r")
        self.status=[]
        #self.password = hashlib.sha512( str(password).encode("utf-8") ).hexdigest()
        for line in file:
            self.addr = line
        file.close()

    def doRequest(self,json,rote = "/admin"): #faz a requisição #######colocar cookie?
        addr = self.addr +  rote
        try:
            r=requests.post(addr,json=json)
            print(r.json()['status'])
            self.status = r.json()['status']
            return (r.status_code==200)
        except Exception as e:
            print("exception ocurred!",e)
            return False

    #commands
    def testServer(self):
        json={"CMD":"testServer"}
        return self.doRequest(json)
    
    def listDevices(self):
        json={"CMD":"listDevices"}
        return self.doRequest(json)

    def statusDevice(self,id):
        json={"CMD":"statusDevice","id":id}
        return self.doRequest(json)
    
    def authorize(self,id,authorization,pendency):
        json={"CMD":"authorize","id":id,'auth':authorization,'pending':pendency}
        return self.doRequest(json)

    def seeLogs(self):
        json={"CMD":"seeLogs"}
        return self.doRequest(json)