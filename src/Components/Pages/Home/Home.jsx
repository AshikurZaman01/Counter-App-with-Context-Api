import { CounterContext, CounterProvider } from './Context/CounterContext';
import Increament from './Context/Increament';
import Decrement from './Context/Decrement';
import ScreenShow from './Context/ScreenShow';
import Reset from './Context/Reset';

const Home = () => {


    return (
        <CounterProvider>

            <div className='flex justify-center items-center h-screen'>
                <div>
                    <ScreenShow></ScreenShow>

                    <div className='flex justify-between'>
                        <Increament></Increament>
                        <Decrement></Decrement>
                        <Reset></Reset>
                    </div>
                </div>

            </div>
        </CounterProvider>
    );
};

export default Home;