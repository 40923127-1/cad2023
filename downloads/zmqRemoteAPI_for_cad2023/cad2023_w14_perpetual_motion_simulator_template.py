from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard

# Connect to CoppeliaSim remote API server
client = RemoteAPIClient('localhost', 23000)

# Get references to objects in the scene
sim = client.getObject('sim')
marble = sim.getObject('./marble')
sensor = sim.getObject('./sensor')

# Start the simulation
sim.startSimulation()

# Set marble as non-static
sim.setObjectInt32Param(marble, sim.shapeintparam_static, 0)

# Define initial positions
initial_position = [-0.825, -0.2, 1.625]
end_of_rail_position = [0.675, -0.225, 1.1]

# Set initial position of the marble
sim.setObjectPosition(marble, -1, initial_position)

# PID control parameters
kp = 5.0   # Proportional gain
ki = 0.1   # Integral gain
kd = 2.0   # Derivative gain

# Initialize PID variables
error_integral = 0.0
error_derivative = 0.0
error = 0.0
last_error = 0.0

# Maximum error for reset
max_reset_error = 0.1

# Main simulation loop
while True:
    if keyboard.is_pressed('q'):
        # Press 'q' to exit the loop
        break

    # Get current position of the marble
    current_position = sim.getObjectPosition(marble, -1)

    # Handle proximity sensor
    r, _, _, _, _ = sim.handleProximitySensor(sensor)

    # When the marble hits the sensor
    if r > 0:
        # Apply force to the marble to control its trajectory
        control_output_x = kp * error + ki * error_integral + kd * error_derivative
        control_output_z = -kp * current_position[2]  # Adjust kp for the z-direction as needed
        sim.addForceAndTorque(marble, [control_output_x, 0, control_output_z], [0, 0, 0])

    # Check if the marble has reached the end of the rail
    if current_position[0] > end_of_rail_position[0]:
        # Calculate the error
        error = initial_position[0] - current_position[0]

        # Update the integral of the error
        error_integral += error

        # Calculate the derivative of the error
        error_derivative = error - last_error

        # Print the control forces and PID parameters
        print(f"Control Force X: {control_output_x}, Control Force Z: {control_output_z}")
        print(f"PID Parameters: kp={kp}, ki={ki}, kd={kd}")

        # Apply force to propel the marble back to the initial position
        sim.addForceAndTorque(marble, [control_output_x, 0, control_output_z], [0, 0, 0])

        # Print the coordinates as the marble drops
        print(f"X: {current_position[0]}, Y: {current_position[1]}, Z: {current_position[2]}")

        # Print the error and best force found
        print(f"Error: {error}")
        print(f"Best Force: [{control_output_x}, 0, {control_output_z}]")

        # Check if the error exceeds the maximum for reset
        if abs(error) > max_reset_error:
            # Reset the marble position to the initial position
            sim.setObjectPosition(marble, -1, initial_position)
            # Reset PID variables
            error_integral = 0.0
            last_error = 0.0
            # Print a message indicating the marble is reset
            print("Reset")
        else:
            # Print a message indicating the marble is not reset
            print("Not reset")

        # Update the last error
        last_error = error

# Stop the simulation
sim.stopSimulation()
