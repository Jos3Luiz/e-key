#
import serial
import requests
import json
import tkinter as tk
import time
import tkinter.font as font
API_ENDPOINT = "https://0l3pomurwh.execute-api.us-east-1.amazonaws.com/dev/"

PENDING=0
APPROVED=1
BLOCKED=2
INVALID=3

class api:
    @staticmethod
    def getAuth(uid):
        r = requests.get(API_ENDPOINT+"getStatus",params={"uid":uid})
        if r.status_code==200:
            return json.loads(r.text)['status']
        else:
            return INVALID

    @staticmethod  
    def register(uid,name):
        return requests.post(API_ENDPOINT+"register",json={"uid":uid,"name":name})
        

class registerWindow:
    def __init__(self,uid):
        self.root=tk.Tk()
        self.uid=uid
        print("creating window")
        self.root.title("Register e-key")

        
        self.nameInput=tk.StringVar(self.root, value='Name here')

        self.uidLabel=tk.Label(self.root,text="UID")
        self.uidLabelValue=tk.Label(self.root,text=hex(uid)[2:])
        
        self.nameLabel=tk.Label(self.root,text="Name")
        self.nameEntry = tk.Entry(self.root,textvariable=self.nameInput)
        
        self.registerButton = tk.Button(self.root,text="register",command = self.submit)
        
        self.configure()
        self.root.mainloop()
    def configure(self):
        self.uidLabel.config(font=("Courier", 30))
        self.uidLabelValue.config(font=("Courier", 30))
        self.nameLabel.config(font=("Courier", 30))
        self.nameEntry.config(font=("Courier", 30))
        self.registerButton.config(font=("Courier", 30))
        
        self.uidLabel.grid(row=0,column=0,padx=20, pady=20)
        self.uidLabelValue.grid(row=0,column=1,padx=20, pady=20)
        self.nameLabel.grid(row=1,column=0,padx=20, pady=20)
        self.nameEntry.grid(row=1,column=1,padx=20, pady=20)
        self.registerButton.grid(row=2,column=0,columnspan=2,padx=20, pady=20)


        
    def submit(self):
        statusCode=api.register(self.uid,self.nameInput.get()).status_code
        
        if statusCode==200:
            self.okLabel=tk.Label(self.root,text="Register sucessfull",fg="green")
        else:
            self.okLabel=tk.Label(self.root,text="Register failed %i"%statusCode,fg="red")
        
        self.okLabel.config(font=("Courier", 30))
        self.okLabel.grid(row=3,column=0,columnspan=2)
        
        self.root.destroy()

            
            
        

def setup():
    arduino = serial.Serial("COM3",9600)
    return arduino

def loop(arduino):
    uid_str = arduino.readline()
    print("recived uid: ",uid_str)
    uid = int(uid_str,16)
    
    
    
    status = api.getAuth(uid)
    
    if status==INVALID:
        c = registerWindow(uid)
        status = PENDING

    status = int.to_bytes(status,1,byteorder="big")
    print("sending status",status)
    arduino.write(status)


if __name__=="__main__":
    arduino = setup()
    while(1):
        loop(arduino)
