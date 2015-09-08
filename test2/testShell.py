import sys, time

for i in range(0,5):
  
  if(i == 4):
  	print("listo")
  else:
  	print ("foo")
  sys.stdout.flush()
  time.sleep(2)