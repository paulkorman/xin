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
    wrapContent: {
        paddingBottom: k*theme.spacing.unit*2
    },
    myCard: {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 56 + k*theme.spacing.unit*2,
        paddingLeft: k*theme.spacing.unit*2,
        paddingRight: k*theme.spacing.unit*2,
        '& img': {
            width: '100%',
        },
        '& > div': {
            position: 'absolute',
            bottom: k*theme.spacing.unit/2,
            left: k*theme.spacing.unit*2,
            right: k*theme.spacing.unit*2,
            color: '#fff',
            backgroundColor: 'rgba(173, 173, 114, 0.8)',
            paddingLeft: k*theme.spacing.unit*3,
            paddingRight: k*theme.spacing.unit*3,
            paddingTop: k*theme.spacing.unit,
            paddingBottom: k*theme.spacing.unit,
        },

    },
    myCardFooter: {
        marginTop: -k*theme.spacing.unit/2,
        marginBottom: k*theme.spacing.unit*3,
        marginLeft: k*theme.spacing.unit*2,
        marginRight: k*theme.spacing.unit*2,
        paddingTop: k*theme.spacing.unit*4,
        paddingBottom: k*theme.spacing.unit*4,
        paddingLeft: k*theme.spacing.unit*3,
        paddingRight: k*theme.spacing.unit*3,
        border: '1px solid #e4e4e4',
        borderTop: 'none',
        borderRadius: '0 0 4px 4px',
        boxShadow: '0px 3px 5.88px 0.12px rgba(156, 156, 156, 0.18)',
    },
    caption: {
        color: '#939393',
        fontSize: k*0.75 + 'rem',
        fontWeight: 500,
    },
    value: {
        color: 'rgba(44, 18, 57, 0.84)',
        textAlign: 'right',
        fontSize: k*1 + 'rem',
        fontWeight: 700
    },
    cssUnderline: {
        '&:after': {
            borderBottomColor: '#846f8f',
        },
    },
    cssInput: {
        fontSize: k*0.85 + 'rem',
        fontWeight: 500,
        paddingLeft: k*theme.spacing.unit*2,
        paddingRight: k*theme.spacing.unit*2,
    },
    marginBottom: {
        marginBottom: k*10
    },
    myBtn: {
        textTransform: 'none'
    },
    linkButton: {
        display: 'block',
        textDecoration: 'none',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 6,
        backgroundColor: 'rgba(136, 118, 80, 0.76)',
        paddingTop: k*theme.spacing.unit*2,
        paddingBottom: k*theme.spacing.unit*2,
    },
    linkButtonCaption: {
        fontSize: k*0.6875 + 'rem',
        color: '#fff'
    },
});

export default styles;
