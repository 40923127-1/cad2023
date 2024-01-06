from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard
import time

client = RemoteAPIClient('localhost', 23000)
sim = client.getObject('sim')
marble = sim.getObject('./marble')
sensor = sim.getObject('./sensor')

sim.setObjectInt32Param(marble, sim.shapeintparam_static, 0)
simulation_started = False

while True:
    if not simulation_started and keyboard.is_pressed('s'):  # 按下 's' 鍵啟動模擬
        sim.startSimulation()
        simulation_started = True
        print("Simulation started")

    if keyboard.is_pressed('q'):  # 按下 'q' 鍵結束程式
        break

    if simulation_started:
        r, dist, pt, obj, normal = sim.handleProximitySensor(sensor)
        res, dist2, point, obj2, n = sim.readProximitySensor(sensor)
        current_position1 = sim.getObjectPosition(marble, -1)
        current_position2 = sim.getObjectPosition(marble, -1)

        if res > 0 and current_position1[0] <= current_position2[0]:
            sim.addForceAndTorque(marble, [750, 0, -75], [0, 1.5, 0])
            print("Acceleration")

    #time.sleep(0.1)  # 加入 0.1 秒的延遲，調整感測器的判斷頻率

sim.stopSimulation()
s