from flask import Flask, jsonify
import requests

app = Flask(__name__)

MENU_API_URL = 'http://api.menu.com/menu'
ORDEN_API_URL = 'http://api.orden.com/orden'
INVENTARIO_API_URL = 'http://api.invetario.com/inventario'

@app.route('/get_data', methods=['GET'])
def get_data():
    try:
        menu_response = requests.get(MENU_API_URL)
        menu_response.raise_for_status()  
        menu_data = menu_response.json()

        orden_response = requests.get(ORDEN_API_URL)
        orden_response.raise_for_status()
        orden_data = orden_response.json()

        inventario_response = requests.get(INVENTARIO_API_URL)
        inventario_response.raise_for_status()
        inventario_data = inventario_response.json()

        combinar_datos = {
            'menu': menu_data,
            'orden': orden_data,
            'inventario': inventario_data
        }

        return jsonify(combinar_datos), 200

    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
