#!/usr/bin/python3
from flask import Flask
from flask import request
from bd import devices,logs

###############################     ROUTES  ########################################
app = Flask(__name__)


@app.route('/admin', methods=["POST"])
def adminCmd():
    try:
        return parseJsonPOST_ADMIN(request.json)

    except Exception as e:
        print('---------------------------------')
        print("error in: " + str(e))

@app.route('/ard', methods=["POST"])
def ardCmd():
    try:
        return parseJsonPOST_ARD(request.json)

    except Exception as e:
        print('---------------------------------')
        print("error in: " + str(e))

########################    HELPERS    #########################

def parseJsonPOST_ADMIN(json): #front

    status_return=200
    if (json["CMD"]=="testServer"):
        print("RPC TEST SERVER", json)
        result="server ok"
    
    elif (json["CMD"]=="listDevices"):
        print("RPC LIST DEVICES",json)
        result='ler BD de devices'

    elif (json["CMD"]=="statusDevice"):
        print("RPC STATUS DEVICE", json)
        result="Ler no BD os detalhes do device:" + str(json["id"])

    elif (json["CMD"]=="authorize"):
        print("RPC AUTHORIZE", json)
        result="Alterar a autorização e a Pendencia do: " + str(json["id"]) + "para " + str(json["auth"]) + ' e ' + str(json["pending"])
    
    elif (json["CMD"]=="seeLogs"):
        print("RPC SEE LOGS", json)
        result="OLHAR A TABELA DE LOGS DA DATABASE E PRINTAR TODA ELA"

    else:
        return {"status":"unkown"},401
    return {"status":result},status_return


def parseJsonPOST_ARD(json): #ard
    status_return=200
    if (json["CMD"]=="testServer"):
        print("RPC TEST SERVER ARDUINO", json)
        result="server ok"
    
    if (json["CMD"]=="isAuth"):
        print("RPC TEST SERVER ARDUINO", json)
        result="verificar autorização do: "  + str(json["id"])
    
    if (json["CMD"]=="registered"):
        print("RPC TEST SERVER ARDUINO", json)
        result="verificar ID DISPONIVEL PARA RETORNAR, criar usuario, criar pendencia como True e auto como False"
    
    else:
        return {"status":"unkown"},401
    return {"status":result},status_return

app.run("0.0.0.0",port=8080, use_reloader=False)
