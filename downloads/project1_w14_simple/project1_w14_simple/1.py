from flask import Flask, jsonify
from zmqRemoteApi_IPv6 import RemoteAPIClient  # 假設你有適當的 ZMQ 遠端 API 的庫

app = Flask(__name__)
coppelia_client = RemoteAPIClient('localhost', 23000)  # 假設 CoppeliaSim 在本地運行並使用預設連接埠

# 簡單的例子路由
@app.route('/get_robot_position', methods=['GET'])
def get_robot_position():
    # 透過 ZMQ 遠端 API 從 CoppeliaSim 獲取機器人位置
    robot_position = get_robot_position_from_coppelia()
    return jsonify(robot_position)

def get_robot_position_from_coppelia():
    # 使用 ZMQ 遠端 API 與 CoppeliaSim 通信，獲取機器人位置的邏輯
    # 這裡只是一個假設的示例，實際需要根據 CoppeliaSim 的 API 進行適當的控制和請求
    # 這可能包括遠端 API 中的函數調用，例如 client.getObject() 或 client.call() 等等
    # 假設此處是獲取機器人位置的邏輯
    return {'x': 10, 'y': 5, 'z': 3}

if __name__ == '__main__':
    app.run(debug=True)  # 在本機啟動 Flask 服務
