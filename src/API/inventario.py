from flask import Flask, request, jsonify
import json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

JSON_FILE = 'api.json'

def cargar_datos():
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r') as file:
            return json.load(file)
    return {
        "inventario": []
    }

def guardar_datos(data):
    with open(JSON_FILE, 'w') as file:
        json.dump(data, file, indent=4)

@app.route('/inventario', methods=['POST'])
def agregar_item_inventario():
    nuevo_item = request.json
    if 'item_id' not in nuevo_item or 'nombre_inv' not in nuevo_item or 'cantidad_inv' not in nuevo_item:
        return jsonify({"error": "Faltan datos necesarios: item_id, nombre y cantidad son requeridos."}), 400
    data = cargar_datos()
    data["inventario"].append(nuevo_item)  
    guardar_datos(data)
    return jsonify({"mensaje": "Item de inventario agregado exitosamente.", "Item": nuevo_item}), 201

@app.route('/inventario', methods=['GET'])
def obtener_inventario():
    data = cargar_datos()
    return jsonify(data["inventario"]), 200 

@app.route('/inventario/<int:item_id>', methods=['PUT'])
def actualizar_item_inventario(item_id):
    cantidad_nueva = request.json.get('cantidad_inv')
    data = cargar_datos()
    for item in data["inventario"]:
        if item['item_id'] == item_id:
            item['cantidad_inv'] = cantidad_nueva  
            guardar_datos(data) 
            return jsonify({"mensaje": "Cantidad actualizada exitosamente.", "Item": item}), 200
    return jsonify({"error": "Item no encontrado."}), 404

if __name__ == '__main__':
    app.run(debug=True)
