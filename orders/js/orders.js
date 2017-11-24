
//  订单数据模拟
var orders = [
    {
        orderId: 'HG170703090567201',
        merchantAccount: '融益行',
        consumerAccount: '***',
        productName: '手机',
        monetary: 9000,
        createTime: '2017-11-18-12:00',
        payState: '已支付',
        allotIngotTime: '2017-11-18-12:00',
        allotGlodIngotTime: '2017-11-18-02:30'
    },{
        orderId: 'HG170703090567201',
        merchantAccount: '融益行',
        consumerAccount: '***',
        productName: '手机',
        monetary: 9000,
        createTime: '2017-11-18-12:00',
        payState: '未支付',
        allotIngotTime: '否',
        allotGlodIngotTime: '2017-11-18-02:30'
    },{
        orderId: 'HG170703090567201',
        merchantAccount: '融益行',
        consumerAccount: '***',
        productName: '手机',
        monetary: 9000,
        createTime: '2017-11-18-12:00',
        payState: '已支付',
        allotIngotTime: '2017-11-18-12:00',
        allotGlodIngotTime: '2017-11-18-02:30'
    },{
        orderId: 'HG170703090567201',
        merchantAccount: '融益行',
        consumerAccount: '***',
        productName: '手机',
        monetary: 9000,
        createTime: '2017-11-18-12:00',
        payState: '已支付',
        allotIngotTime: '2017-11-18-12:00',
        allotGlodIngotTime: '2017-11-18-02:30'
    },{
        orderId: 'HG170703090567201',
        merchantAccount: '融益行',
        consumerAccount: '***',
        productName: '手机',
        monetary: 9000,
        createTime: '2017-11-18-12:00',
        payState: '未支付',
        allotIngotTime: '否',
        allotGlodIngotTime: '2017-11-18-02:30'
    },{
        orderId: 'HG170703090567201',
        merchantAccount: '融益行',
        consumerAccount: '***',
        productName: '手机',
        monetary: 9000,
        createTime: '2017-11-18-12:00',
        payState: '已支付',
        allotIngotTime: '2017-11-18-12:00',
        allotGlodIngotTime: '2017-11-18-02:30'
    },{
        orderId: 'HG170703090567201',
        merchantAccount: '融益行',
        consumerAccount: '***',
        productName: '手机',
        monetary: 9000,
        createTime: '2017-11-18-12:00',
        payState: '已支付',
        allotIngotTime: '2017-11-18-12:00',
        allotGlodIngotTime: '2017-11-18-02:30'
    }
]

instancePage.ordersData = orders;

laydate.render({
    elem: '#datetimepicker_start',
    type: 'datetime',
    format: 'yyyy-MM-dd-HH:mm'
});
laydate.render({
    elem: '#datetimepicker_end',
    type: 'datetime',
    format: 'yyyy-MM-dd-HH:mm'
});