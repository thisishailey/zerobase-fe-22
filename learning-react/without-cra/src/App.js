import React from "react";
import Button from './components/Button';

function App() {
    return (
        <div className="App">
            <Button mainColor={'#86B6F6'} color={'#EEF5FF'} textBf={'click'} textAf={'clicked!'} />
            <Button mainColor={'#B99470'} color={'#F8F0E5'} textBf={'submit'} textAf={'submitted!'} />
            <Button mainColor={'#E6A4B4'} color={'#FFF6F6'} textBf={'send'} textAf={'sent!'} />
            <Button mainColor={'#86A789'} color={'#EBF3E8'} textBf={'solve'} textAf={'solved!'} />
        </div>
    );
}

export default App;