import api
import json
HEADERS= {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    }

def findPostParameters(event,paramName):
    params=json.loads(base64.b64decode(event['body'])) if event['isBase64Encoded']==True else json.loads(event['body'])
    return params[paramName]
    
def findGetParameters(event,paramName):
    return event['queryStringParameters'][paramName]

#recives uid and return a json with the object status
def getStatus_handler(event,context):
    uid    = findGetParameters(event,"uid")
    status,code = api.getStatus(int(uid))

    return{"statusCode":code,'body':json.dumps(status),"headers":HEADERS}

#request registration
def register_handler(event,context):
    name=findPostParameters(event,"name")
    uid=findPostParameters(event,"uid")
    status,code = api.register(int(uid),name)

    return{"statusCode":code,'body':json.dumps(status),"headers":HEADERS}

#list all devices on the server
def listDevices_handler(event,context):
    status,code = api.listDevices()
    return{"statusCode":code,'body':json.dumps(status),"headers":HEADERS}

#remove item from database
def remove_handler(event,context):
    uid=findPostParameters(event,"uid")
    status,code = api.remove(int(uid))
    return{"statusCode":code,'body':json.dumps(status),"headers":HEADERS}

#update status for a card
def setStatus_handler(event,context):
    uid=findPostParameters(event,"uid")
    status=findPostParameters(event,"status")
    status,code = api.setStatus(int(uid),int(status))
    return{"statusCode":code,'body':json.dumps(status),"headers":HEADERS}
    
if __name__=="__main__":
    r = getStatus_handler({'queryStringParameters':{'uid':0}},0)
    print(r)
    r = register_handler({'isBase64Encoded':False,'body':json.dumps({'uid':0,'name':'esoj2'})},0)
    print(r)
