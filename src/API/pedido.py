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
        return {"pedidos": []} 
    return {"pedidos": []}

@app.route('/pedido', methods=['GET'])
def obtener_pedidos():
    data = cargar_datos()
    print("Datos cargados:", data)
    return jsonify(data["pedidos"]), 200

@app.route('/middlend/pedido', methods=['POST'])
def agregar_pedido():
    try:
        nuevo_pedido = request.json  
        print("Pedido recibido:", nuevo_pedido)
        data = cargar_datos()
        nuevo_id = max([pedido.get('id', 0) for pedido in data["pedidos"]], default=0) + 1
        nuevo_pedido["id"] = nuevo_id
        data["pedidos"].append(nuevo_pedido)

        with open('src/API/api.json', 'w') as file:
            json.dump(data, file, indent=4)

        return jsonify({"mensaje": "Pedido agregado exitosamente", "nuevo_pedido": nuevo_pedido}), 201
    except Exception as e:
        print(f"Error al agregar pedido: {str(e)}")
        return jsonify({"error": "Error al agregar pedido"}), 500


if __name__ == '__main__':
    app.run(debug=True)