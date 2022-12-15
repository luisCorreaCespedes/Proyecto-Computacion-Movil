import Spinner from 'react-native-loading-spinner-overlay'

export const LoadingOverlay = ({loading}: {loading: boolean}) => {
    return <Spinner
    visible = {loading}
    overlayColor = "rgba(0, 0, 0, 0.60)"
    textContent = 'Espere un momento...'
    textStyle={{
        color: '#FFF',
        fontWeight: '400'
    }}
    />
}