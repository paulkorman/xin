//const bodyW = 414;
//let windowH = window.innerHeight;
let windowW = window.innerWidth;
let k = 1;
if(windowW <= 414 && windowW > 320){
    k = windowW/320;
}
if(windowW > 414){
    k = 414/320;
}
if(windowW <= 320){
    k=1;
}

const styles = theme => ({
    root: {
        width: '100%',
        height: 52,
        color: '#000000',
        opacity: '0.5',
    },
    leftCol: {
        fontWeight: 'bold',
        color: '#000000',
        opacity: '0.5',
    },
    title: {
        textAlign: 'center',
        color: '#000000',
        opacity: '0.5',
        fontSize: k*0.875 + 'rem',
        fontWeight: 500
    },
    rightCol: {
        textAlign: 'right',
        color: '#000000',
        opacity: '0.5',
    },
    appbar: {
        background: 'none',
        boxShadow: 'none',
        backgroundColor: '#fbfbfb',
        width: document.body.offsetWidth,
        maxWidth: 414,
        left: (windowW > 414)? '50%' : 0,
        marginLeft: (windowW > 414)? '-207px': 0,
        zIndex: 998,
    },
});

export default styles;