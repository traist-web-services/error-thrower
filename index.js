module.exports = {
    construct: async function (self, options) {
        console.log('Scheduling an error');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Throwing error');
        throw new Error
    }
}