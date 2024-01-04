var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'ssH', 'text': '把public key放到github，在putty裡選擇private key的路徑 \n \n \n \n \n \n 影片名字用gitpush.mp4wink會抓不到 \n 改成git.mp4就可以 \n', 'tags': '', 'url': 'ssH.html'}, {'title': '倉儲與網站評分項目:', 'text': 'A: 是否 按照進度明確標示倉儲的改版歷程 \n B: 是否根據 \xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論 \n C: 是否就 \xa0 Replit、s.cycu.org 與 localhost \xa0 情境下對個人與分組倉儲進行設定操作 \n D: 是否就所分配的 \xa0 CAD 套件 從安裝設定到繪圖提供內容參考 \n E: 是否使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載 \n F: 是否將自行繪製的專案一零組件 轉入 CoppeliaSim \n G: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬 \n H: 是否實際操作 \xa0 Triangle 軌道系統 的鋼球永動模擬 \n I: 是否完成 W15 的平面雙 U 迴路上的 鋼球永動系統繪圖、轉檔與系統模擬 \n J: 是否使用所分配的 CAD 套件完成 專案二 1D 平台零組件繪圖 , 並提供零組件下載 \n K: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬 \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 \xa0 PID 控制理論 進行資料收集與 ChatGPT 對答 \n', 'tags': '', 'url': '倉儲與網站評分項目:.html'}, {'title': '作業1', 'text': 'NX繪圖過程 \n 球要開這3個設定 不然sensor感測不到 \n \n 看起來我的軌道設計有問題會飛出去 \n \n NX繪圖 \n \n \n', 'tags': '', 'url': '作業1.html'}, {'title': '檔案', 'text': '\n 檔案 \n', 'tags': '', 'url': '檔案.html'}, {'title': 'wink', 'text': '\n 出現錯誤 \n \n 100*603的格式不可以，會出現轉換錯誤 \n 縮放成1008*630就可以了 \n', 'tags': '', 'url': 'wink.html'}, {'title': 'wink嵌入', 'text': '<div class="winkVideoContainerClass"><video width="1008" height="630" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="123">\n<source src="./../downloads/git.mp4" type="video/mp4" /></video></div> \n \n', 'tags': '', 'url': 'wink嵌入.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'W12', 'text': "用chatgpt來讀取座位名單跟排列座號 \n https://chat.openai.com/share/cf7644b8-3bfe-4efd-90d6-9edd9239dda8 \n 將顯示錯誤的部分刪掉的程式碼 \n file_path = 'y:/2a_w12_seat.txt'  # 更換成你的檔案路徑\n# 儲存讀取的資料\n\nstudents = []\n\nwith open(file_path, 'r') as file:\n    for line_number, line in enumerate(file, 1):  # 追蹤行號\n        # 移除換行符號並以 Tab 鍵分割內容\n        data = line.strip().split('\\t')\n        \n        # 確保分割後的內容符合預期的格式\n        if len(data) == 2:\n            try:\n                # 將第一個元素轉換為整數\n                number = int(data[0])\n                \n                # 將第二個元素轉換為元組\n                tuple_str = data[1].strip('()')\n                tuple_values = tuple(map(int, tuple_str.split(',')))\n                \n                # 儲存學生資料到清單中\n                students.append((number, tuple_values))\n            except ValueError as e:\n                \n                continue  # 忽略這行資料\n   \n# 根據座位位置排序學生\nsorted_students = sorted(students, key=lambda x: (x[1][0], x[1][1]))\n\n# 輸出排序後的結果\nfor student in sorted_students:\n    print(student) \n", 'tags': '', 'url': 'W12.html'}, {'title': 'W14', 'text': '用到的檔案 \n 至少會動了，雖然上不去 \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '檔案', 'tags': '', 'url': 'W15.html'}, {'title': '1.在solidworks進行繪圖', 'text': '\n', 'tags': '', 'url': '1.在solidworks進行繪圖.html'}, {'title': '2.假設控制盒內有個電磁線圈進行加速，但沒有畫出來', 'text': '就畫了個能放上軌道的底座 \n', 'tags': '', 'url': '2.假設控制盒內有個電磁線圈進行加速，但沒有畫出來.html'}, {'title': '3.stl檔轉入coppeliasim', 'text': '\n \n', 'tags': '', 'url': '3.stl檔轉入coppeliasim.html'}, {'title': '4.設定sensor位置和程式施力', 'text': '\n \n \n # 以下的 zmq 程式庫已經過修改, 可以在 IPv4 與 IPv6 環境下使用\n# 針對 CoppeliaSim 的 zmq 延伸程式, Python 需要安裝 cbor 與 pyzmq 等兩個模組\n# pip install cbor pyzmq\nfrom zmqRemoteApi_IPv6 import RemoteAPIClient\n# 由於在 zmq 程式執行時, 希望讓使用者可以透過鍵盤 (或其他電子電機訊號) 指令控制遠端的機電模擬場景\n# Python 程式環境還需要安裝 keyboard 模組, pip install keyboard\nimport keyboard\nimport time\n\n# 利用以下程式碼連接 CoppeliaSim remote API server\n#第一個輸入變數若為 localhost 則只能控制與程式同在的場景\n# 但若第一輸入變數為可連外的 IPv4 或 IPv6 address, 則可用來控制遠端電腦上的模擬場景\n# 23000 為 CoppeliaSim 使用 ZMQ remote API 連線控制時內定的網路埠號\n# client 與 server 的防火牆或代理主機必須讓此埠號的封包 (socket) 通過\nclient = RemoteAPIClient(\'localhost\', 23000)\n\n# 利用 getObject 取得場景中的 "sim" 物件參考對應值\nsim = client.getObject(\'sim\')\n\n# 利用 sim 物件的 startSimulation() 方法啟動場景模擬\nsim.startSimulation()\n\n# 利用 getObject 取得 \'marble\' and \'sensor\'  物件的參考對應值\nmarble = sim.getObject(\'./marble\')\nsensor = sim.getObject(\'./sensor\')\n# 透過變數屬性設定方法將 marble 設為 non-static, 意即具有 dynamic 特性\nsim.setObjectInt32Param(marble, sim.shapeintparam_static, 0)\nsim.addForceAndTorque(marble, [1, 0, 0], [0, 0, 0]) # 給球一個初始的力\n\n\n# 主模擬程序\nwhile True:\n    if keyboard.is_pressed(\'q\'):\n        # 模擬執行期間, 將滑鼠停在場景, 鍵盤按下 q 可以終止模擬\n        break\n\n    r, dist, pt, obj, normal = sim.handleProximitySensor(sensor)\n    res, dist2, point, obj2, n = sim.readProximitySensor(sensor)\n    # Get the current position of the marble\n    current_position1 = sim.getObjectPosition(marble, -1)\n    current_position2 = sim.getObjectPosition(marble, -1)\n \n\n    if res > 0:\n        if current_position1[0] <=current_position2[0]:\n            # 對鋼球質心施以一個向量力\n            sim.addForceAndTorque(marble, [25, 0, 0], [0, 0, 0])\n            print("加速") # 看有沒有正常加速\n        time.sleep(0.1)  # 加入 0.1 秒的延遲，調整感測器的判斷頻率\n\n# Stop the simulation\nsim.stopSimulation()\n \n', 'tags': '', 'url': '4.設定sensor位置和程式施力.html'}, {'title': '5.localhost控制自己的', 'text': '使用這段程式碼控制 \n # 以下的 zmq 程式庫已經過修改, 可以在 IPv4 與 IPv6 環境下使用\n# 針對 CoppeliaSim 的 zmq 延伸程式, Python 需要安裝 cbor 與 pyzmq 等兩個模組\n# pip install cbor pyzmq\nfrom zmqRemoteApi_IPv6 import RemoteAPIClient\n# 由於在 zmq 程式執行時, 希望讓使用者可以透過鍵盤 (或其他電子電機訊號) 指令控制遠端的機電模擬場景\n# Python 程式環境還需要安裝 keyboard 模組, pip install keyboard\nimport keyboard\n\n# 利用以下程式碼連接 CoppeliaSim remote API server\n#第一個輸入變數若為 localhost 則只能控制與程式同在的場景\n# 但若第一輸入變數為可連外的 IPv4 或 IPv6 address, 則可用來控制遠端電腦上的模擬場景\n# 23000 為 CoppeliaSim 使用 ZMQ remote API 連線控制時內定的網路埠號\n# client 與 server 的防火牆或代理主機必須讓此埠號的封包 (socket) 通過\nclient = RemoteAPIClient(\'localhost\', 23000)\n\n# 利用 getObject 取得場景中的 "sim" 物件參考對應值\nsim = client.getObject(\'sim\')\n\n# 利用 sim 物件的 startSimulation() 方法啟動場景模擬\nsim.startSimulation()\n\n# 利用 getObject 取得 \'marble\' and \'sensor\'  物件的參考對應值\nmarble = sim.getObject(\'./marble\')\nsensor = sim.getObject(\'./sensor\')\n\n# 透過變數屬性設定方法將 marble 設為 non-static, 意即具有 dynamic 特性\nsim.setObjectInt32Param(marble, sim.shapeintparam_static, 0)\n\n# 主模擬程序\nsim.addForceAndTorque(marble, [5, 0, 0], [0, 0, 0])\nwhile True:\n    if keyboard.is_pressed(\'q\'):\n        # 模擬執行期間, 將滑鼠停在場景, 鍵盤按下 q 可以終止模擬\n        break\n\n    r, dist, pt, obj, normal = sim.handleProximitySensor(sensor)\n    res, dist2, point, obj2, n = sim.readProximitySensor(sensor)\n    # Get the current position of the marble\n    current_position1 = sim.getObjectPosition(marble, -1)\n    current_position2 = sim.getObjectPosition(marble, -1)\n\n    # 當鋼球碰觸感測器時\n    if res > 0:\n        if current_position1[0] < current_position2[0]:\n            # 對鋼球質心施以一個向量力\n            sim.addForceAndTorque(marble, [20, 0, -70], [0, 0, 0])\n\n# Stop the simulation\nsim.stopSimulation() \n', 'tags': '', 'url': '5.localhost控制自己的.html'}, {'title': '6.ipv6控制其他人的', 'text': '把localhost改成ipv6 IP \n # 以下的 zmq 程式庫已經過修改, 可以在 IPv4 與 IPv6 環境下使用\n# 針對 CoppeliaSim 的 zmq 延伸程式, Python 需要安裝 cbor 與 pyzmq 等兩個模組\n# pip install cbor pyzmq\nfrom zmqRemoteApi_IPv6 import RemoteAPIClient\n# 由於在 zmq 程式執行時, 希望讓使用者可以透過鍵盤 (或其他電子電機訊號) 指令控制遠端的機電模擬場景\n# Python 程式環境還需要安裝 keyboard 模組, pip install keyboard\nimport keyboard\n\n# 利用以下程式碼連接 CoppeliaSim remote API server\n#第一個輸入變數若為 localhost 則只能控制與程式同在的場景\n# 但若第一輸入變數為可連外的 IPv4 或 IPv6 address, 則可用來控制遠端電腦上的模擬場景\n# 23000 為 CoppeliaSim 使用 ZMQ remote API 連線控制時內定的網路埠號\n# client 與 server 的防火牆或代理主機必須讓此埠號的封包 (socket) 通過\nclient = RemoteAPIClient(\'[2001:288:6004:17:2023:cada::3]\', 23000)\n\n# 利用 getObject 取得場景中的 "sim" 物件參考對應值\nsim = client.getObject(\'sim\')\n\n# 利用 sim 物件的 startSimulation() 方法啟動場景模擬\nsim.startSimulation()\n\n# 利用 getObject 取得 \'marble\' and \'sensor\'  物件的參考對應值\nmarble = sim.getObject(\'./marble\')\nsensor = sim.getObject(\'./sensor\')\n\n# 透過變數屬性設定方法將 marble 設為 non-static, 意即具有 dynamic 特性\nsim.setObjectInt32Param(marble, sim.shapeintparam_static, 0)\n\n# 主模擬程序\nsim.addForceAndTorque(marble, [5, 0, 0], [0, 0, 0])\nwhile True:\n    if keyboard.is_pressed(\'q\'):\n        # 模擬執行期間, 將滑鼠停在場景, 鍵盤按下 q 可以終止模擬\n        break\n\n    r, dist, pt, obj, normal = sim.handleProximitySensor(sensor)\n    res, dist2, point, obj2, n = sim.readProximitySensor(sensor)\n    # Get the current position of the marble\n    current_position1 = sim.getObjectPosition(marble, -1)\n    current_position2 = sim.getObjectPosition(marble, -1)\n\n    # 當鋼球碰觸感測器時\n    if res > 0:\n        if current_position1[0] < current_position2[0]:\n            # 對鋼球質心施以一個向量力\n            sim.addForceAndTorque(marble, [20, 0, -70], [0, 0, 0])\n\n# Stop the simulation\nsim.stopSimulation()\n \n', 'tags': '', 'url': '6.ipv6控制其他人的.html'}]};