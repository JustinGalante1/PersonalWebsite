export default {
    palette: {
        primary: {
            light: '#2c2c2c',
            main: '#000000',
            dark: '#000000',
            contrastText: '#fff'
        },
        secondary: {
            light: '#83ffff',
            main: '#3fe2ff',
            dark: '#00b0cc',
            contrastText: '#fff'
        },
    },
    spreadThis : {
        typography: {
          useNextVariants: true
        },
        form: {
          textAlign: 'center'
        },
        image: {
          margin: '20px auto 20px auto'
        },
        backgroundImage: {
          position: 'absolute',
        },
        pageTitle: {
          margin: '10px auto 10px auto'
        },
        textField: {
          margin: '10px auto 10px auto'
        },
        button: {
          marginTop: 20,
          position: 'relative'
        },
        foreground: {
          position: 'relative',
        },
        hometitle: {
          margin: '200px 0px 0px 0px',
          color: 'white',
        },
        whitetext: {
          color: 'white'
        },
        bluetext: {
          color: 'blue'
        },
        customError: {
          color: 'red',
          fontSize: '0.8rem',
          marginTop: 10
        },
        progress: {
          position: 'absolute'
        },
        invisibleSeparator: {
          border: 'none',
          margin: 4
        },
        visibleSeparator: {
          width: '100%',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          marginBottom: 20
        },
        paper: {
          padding: 20
        },
        profile: {
          '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
              position: 'absolute',
              top: '80%',
              left: '70%'
            }
          },
          '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
          },
          '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
              verticalAlign: 'middle'
            },
            '& a': {
              color: '#00bcd4'
            }
          },
          '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
          },
          '& svg.button': {
            '&:hover': {
              cursor: 'pointer'
            }
          }
        },
        buttons: {
          textAlign: 'center',
          '& a': {
            margin: '20px 10px'
          }
        }
      }
}