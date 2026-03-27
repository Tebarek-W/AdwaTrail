import net from 'net';

const host = 'db.vjqqzhsntbulsptuchwg.supabase.co';
const ports = [5432, 6543];

ports.forEach(port => {
  const socket = new net.Socket();
  socket.setTimeout(5000);
  
  socket.on('connect', () => {
    console.log(`Port ${port} is reachable!`);
    socket.destroy();
  });
  
  socket.on('timeout', () => {
    console.log(`Port ${port} timed out.`);
    socket.destroy();
  });
  
  socket.on('error', (err) => {
    console.log(`Port ${port} error: ${err.message}`);
    socket.destroy();
  });
  
  socket.connect(port, host);
});
