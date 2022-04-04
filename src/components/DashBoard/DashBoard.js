import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const DashBoard = () => {
    
    const chartData = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='w-11/12 mx-auto py-10'>
            <h1 className='text-3xl md:text-4xl text-center font-semibold my-14'><span className='border-b-2 border-b-orange-400'>
                <span className=' text-orange-400'>Dash</span>Board</span>
            </h1>
            {/* line chart  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 my-10'>
                <div className='bg-white rounded-lg p-4 w-11/12 mx-auto flex flex-col items-center justify-center'>
                    <h1 className='text-center text-orange-500 font-semibold font-mono text-xl'>Sell in month</h1>
                    <LineChart width={400} height={300} data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#fb923c" />
                    </LineChart>
                </div>
                {/* bar chart  */}
                <div className='bg-white rounded-lg p-4 w-11/12 mx-auto flex flex-col items-center justify-center'>
                    <h1 className='my-3 text-center text-orange-500 font-semibold font-mono text-xl'>Investment vs Revenue</h1>
                    <BarChart width={400} height={300} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#fb923c" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
                {/* Area Chart  */}
                <div className='bg-white rounded-lg p-4 w-11/12 mx-auto flex flex-col items-center justify-center'>
                    <h1 className='text-center text-orange-500 font-semibold font-mono text-xl'>Investment vs Revenue</h1>
                    <AreaChart width={400} height={300} data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#ffc595" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Legend />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#fb923c" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                {/* pie chart  */}
                <div className='bg-white rounded-lg p-4 w-11/12 mx-auto flex flex-col items-center justify-center'>
                    <h1 className='text-center text-orange-500 font-semibold font-mono text-xl'>Investment vs Revenue</h1>
                    <PieChart width={400} height={400}>
                    <Tooltip />
                        <Pie data={chartData} nameKey='month' dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" />
                        <Pie data={chartData} nameKey='month' dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#fb923c" label />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;