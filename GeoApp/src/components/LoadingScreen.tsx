import Spinner from 'react-native-loading-spinner-overlay'

export const LoadingOverlay = ({loading}: {loading: boolean}) => {
    return <Spinner
    visible= {loading}
    textContent= 'wena choro'>

    </Spinner>
}