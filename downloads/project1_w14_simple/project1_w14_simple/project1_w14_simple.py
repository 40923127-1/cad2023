from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard
import time

client = RemoteAPIClient('localhost', 23000)
sim = client.getObject('sim')
marble = sim.getObject('./marble')
sensor = sim.getObject('./sensor')

sim.setObjectInt32Param(marble, sim.shapeintparam_static, 0)

sim.startSimulation()

first_force = True  # 設置一個變數，追蹤第一次施力

while True:
    if keyboard.is_pressed('q'):
        break

    r, dist, pt, obj, normal = sim.handleProximitySensor(sensor)
    res, dist2, point, obj2, n = sim.readProximitySensor(sensor)

    current_position1 = sim.getObjectPosition(marble, -1)
    current_position2 = sim.getObjectPosition(marble, -1)

    if res > 0:
        print("碰到了")
        print(current_position1,current_position2)
        if first_force:
            sim.addForceAndTorque(marble, [400, 0, -70], [0, 0, 0])
            print("第一次施力")
            time.sleep(0.1) 
            first_force = False  # 更新狀態為非第一次施力
        elif current_position1[0]<=current_position2[0]:
            sim.addForceAndTorque(marble, [340, 0, -55], [0, 0, 0])
            time.sleep(0.1) 
            print("之後的施力")

    #time.sleep(0.05)  # 放在迴圈最後一行，確保每次迭代之後暫停 0.1 秒

sim.stopSimulation()
