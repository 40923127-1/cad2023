var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'ssH', 'text': '\n \n \\', 'tags': '', 'url': 'ssH.html'}, {'title': '作業1', 'text': '\n NX繪圖 \n \n \n', 'tags': '', 'url': '作業1.html'}, {'title': '檔案', 'text': '\n 檔案 \n', 'tags': '', 'url': '檔案.html'}, {'title': 'localhost', 'text': '\n 在tmp裡面 git clone\xa0\xa0 \n \n', 'tags': '', 'url': 'localhost.html'}, {'title': 'wink', 'text': '\n 出現錯誤 \n \n 100*603的格式不可以，會出現轉換錯誤 \n 縮放成1008*630就可以了 \n', 'tags': '', 'url': 'wink.html'}, {'title': 'W12', 'text': "用chatgpt來讀取座位名單跟排列座號 \n https://chat.openai.com/share/cf7644b8-3bfe-4efd-90d6-9edd9239dda8 \n 將顯示錯誤的部分刪掉的程式碼 \n file_path = 'y:/2a_w12_seat.txt'  # 更換成你的檔案路徑\n# 儲存讀取的資料\n\nstudents = []\n\nwith open(file_path, 'r') as file:\n    for line_number, line in enumerate(file, 1):  # 追蹤行號\n        # 移除換行符號並以 Tab 鍵分割內容\n        data = line.strip().split('\\t')\n        \n        # 確保分割後的內容符合預期的格式\n        if len(data) == 2:\n            try:\n                # 將第一個元素轉換為整數\n                number = int(data[0])\n                \n                # 將第二個元素轉換為元組\n                tuple_str = data[1].strip('()')\n                tuple_values = tuple(map(int, tuple_str.split(',')))\n                \n                # 儲存學生資料到清單中\n                students.append((number, tuple_values))\n            except ValueError as e:\n                \n                continue  # 忽略這行資料\n   \n# 根據座位位置排序學生\nsorted_students = sorted(students, key=lambda x: (x[1][0], x[1][1]))\n\n# 輸出排序後的結果\nfor student in sorted_students:\n    print(student) \n", 'tags': '', 'url': 'W12.html'}]};