const process = require('process');
const exec = require('child_process').exec;
const { memoryUsage, cpuUsage }= require('node:process');
const maxBuffer = 102400 * 102400; 
const targetProcess = process.argv.splice(2)

function main(){
    const memoryUsageBefore = memoryUsage().heapTotal / (1024 * 1024)
    const CPUUsageBefore = cpuUsage().user / (1024 * 1024)
    const command = `node ${targetProcess}`;
    exec(command, {maxBuffer}, function(err, stdout, stderr){
        if(err || stderr){
            console.log(`Error ${err} ${stderr}`)
        }
        const memoryUsageAfter = memoryUsage().heapTotal / (1024 * 1024)
        const CPUUsageAfter = cpuUsage().user / (1024 * 1024)
        console.log(`Memory usage: ${(memoryUsageAfter-memoryUsageBefore).toFixed(2)} MB`)
        console.log(`CPU usage: ${(CPUUsageAfter-CPUUsageBefore).toFixed(2)} MB`)
    });
    
}
main()