from flask import Flask, jsonify
from zmqRemoteApi_IPv6 import RemoteAPIClient  # 假設你有適當的 ZMQ 遠端 API 的庫

app = Flask(__name__)
coppelia_client = RemoteAPIClient('localhost', 23000)  # 假設 CoppeliaSim 在本地運行並使用預設連接埠

    app.run(debug=True)  # 在本機啟動 Flask 服務
