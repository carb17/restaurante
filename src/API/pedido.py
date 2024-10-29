from flask import Flask, request, jsonify
import json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def cargar_datos():
    try:
        with open('src/API/api.json', 'r') as file:
            return json.load(file)
    except Exception as e:
        print(f"Error al cargar datos: {str(e)}") 
        return {"pedido": []} 
    return {"pedido": []} 

@app.route('/pedidos', methods=['GET'])
def obtener_pedidos():
    data = cargar_datos()
    print("Datos cargados:", data)
    return jsonify(data["pedido"]), 200  

if __name__ == '__main__':
    app.run(debug=True)
