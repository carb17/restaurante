from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

JSON_FILE = 'api.json'

def cargar_datos():
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r') as file:
            return json.load(file)
    return {
        "menu": [],
        "orden": [],
        "inventario": []
    }

def guardar_datos(data):
    with open(JSON_FILE, 'w') as file:
        json.dump(data, file, indent=4)

@app.route('/pedidos', methods=['POST'])
def agregar_pedido():
    nuevo_pedido = request.json
    if 'orden_id' not in nuevo_pedido or 'platos' not in nuevo_pedido or 'total_pedido' not in nuevo_pedido:
        return jsonify({"error": "Faltan datos necesarios: orden_id, platos y total_pedido son requeridos."}), 400
    data = cargar_datos()
    data["orden"].append(nuevo_pedido)  
    guardar_datos(data)
    return jsonify({"mensaje": "Pedido agregado exitosamente.", "pedido": nuevo_pedido}), 201

@app.route('/pedidos', methods=['GET'])
def obtener_pedidos():
    data = cargar_datos()
    return jsonify(data["orden"]), 200  

if __name__ == '__main__':
    app.run(debug=True)
