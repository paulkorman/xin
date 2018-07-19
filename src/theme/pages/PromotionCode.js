const styles = theme => ({
    myCard: {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 56 + theme.spacing.unit*2,
        paddingLeft: theme.spacing.unit*2,
        paddingRight: theme.spacing.unit*2,
        '& img': {
            width: '100%',
        },
        '& > div': {
            position: 'absolute',
            bottom: theme.spacing.unit/2,
            left: theme.spacing.unit*2,
            right: theme.spacing.unit*2,
            color: '#fff',
            backgroundColor: 'rgba(173, 173, 114, 0.8)',
            paddingLeft: theme.spacing.unit*3,
            paddingRight: theme.spacing.unit*3,
            paddingTop: theme.spacing.unit,
            paddingBottom: theme.spacing.unit,
        },

    },
    myCardFooter: {
        marginTop: -theme.spacing.unit/2,
        marginBottom: theme.spacing.unit*3,
        marginLeft: theme.spacing.unit*2,
        marginRight: theme.spacing.unit*2,
        paddingTop: theme.spacing.unit*4,
        paddingBottom: theme.spacing.unit*4,
        paddingLeft: theme.spacing.unit*3,
        paddingRight: theme.spacing.unit*3,
        border: '1px solid #e4e4e4',
        borderTop: 'none',
        borderRadius: '0 0 4px 4px',
        boxShadow: '0px 3px 5.88px 0.12px rgba(156, 156, 156, 0.18)',
    },
    caption: {
        color: '#939393',
        fontSize: '0.75rem',
        fontWeight: 500,
    },
    value: {
        color: 'rgba(44, 18, 57, 0.84)',
        textAlign: 'right',
        fontSize: '1rem',
        fontWeight: 700
    },
    cssLabel: {
        '&$cssFocused': {
            color: '#939393',
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: '#846f8f',
        },
    },
    cssInput: {
        fontSize: '0.85rem',
        fontWeight: 500,
    },
    marginBottom: {
        marginBottom: 10
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
        paddingTop: theme.spacing.unit*2,
        paddingBottom: theme.spacing.unit*2,
    },
    linkButtonCaption: {
        fontSize: '0.6875rem',
        color: '#fff'
    }

});

export default styles;
