import profilePic from './assets/jhin.jpg'

function Card() {
    return(
        <div className="Card">
            <img className="CardImg" src={profilePic} alt="Profile Picture"/>
            <h2 className='Card-Title'>Arjhine A. Ty</h2>
            <p className='Card-Text'>I code for no particular reasons</p>
        </div>
    );
}

function Card1() {
    return(
        <div className="Card1">
            <img className="CardImg1" src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/423132814_292030810546724_802324696620193322_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFjZzwaGdXvRbmVhOdhNH76CXMncMMIXRoJcydwwwhdGre6ui8O0HuJCzkmggr0LULoZ9So9_ocJo5UXWteLvGY&_nc_ohc=yNl6J7AlCzsAX_sIytJ&_nc_oc=AQmfIMJnL1Q4xYHwo47WWlyAfybIdff29hn_2bZCyr32J0ad-rP59pW1sEjAU_u9eQ9kPrgbptkQrM-CbiXC2RP2&_nc_ht=scontent-sin6-4.xx&oh=00_AfAdiPogm1QxhG0zvM46I9zFaXO7imrbTJPLdHiTEl8TXg&oe=65FB7130" alt="Profile Picture"/>
            <h2 className='Card-Title1'>Mark Angelo Aviles</h2>
            <p className='Card-Text1'>I code cuz it's fun designing!</p>
        </div>
    );
}


function Card2() {
    return(
        <div className="Card2">
            <img className="CardImg2" src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/387178835_23880989574879105_7476556026342297636_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE-xcYKG5vdbolGaxvkcsZIvltR4Jx9uFO-W1HgnH24U4gAxGqG8bpmzwmescNz5L1LaAq7PUXmGbWbNploplLa&_nc_ohc=AAaS1mAFbhwAX-59UIQ&_nc_ht=scontent-sin6-4.xx&oh=00_AfCimZZR94BaMWhSMLMobGJA_pRhA7CV7b3SZjI2-SYJmg&oe=65FCAFFE" alt="Profile Picture"/>
            <h2 className='Card-Title2'>John Anthony Nagpla</h2>
            <p className='Card-Text2'>I code cuz it's cool?!</p>
        </div>
    );
}



function Card3() {
    return(
        <div className="Card3">
            <img className="CardImg3" src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/416881276_7225012150871191_6924153353875684456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEa87GQLSYcr_wHQFfw1gsU0l5fysMG1CXSXl_KwwbUJfec-aTpXCgt0Qe8z-F8YI_SPspdcfWNbnrsWmaQXTTh&_nc_ohc=-i0uUuMpG3YAX8tvxRS&_nc_ht=scontent-sin6-3.xx&oh=00_AfBTTZAYpEkK8xfCla2N5ekLgWsjY8rtP_ljpCafByw8Mg&oe=65FB43AD" alt="Profile Picture"/>
            <h2 className='Card-Title3'>Bastique Xzer Yohan Magsalin</h2>
            <p className='Card-Text3'>I code because, I don't know as well</p>
        </div>
    );
}

export{
    Card,
    Card1,
    Card2,
    Card3,
 }
