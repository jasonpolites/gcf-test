exports.repohello = function(context, data) {
    console.log(data.message);
    context.success(data.message);
};