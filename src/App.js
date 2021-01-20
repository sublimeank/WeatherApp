import React from 'react';
import {SafeAreaView} from 'react-native';
import LoaderScreen from './screens/LoaderScreen';
import ResultScreen from './screens/ResultScreen';
import ErrorScreen from './screens/ErrorScreen';
import {connect} from 'react-redux'
import {fetchTempData, ERROR_IN_DATA_LOADING, TEMP_DATA_LOADING} from './store/actions'
import  Geolocation from '@react-native-community/geolocation'
const error_text = "Something Went Wrong at our End";
const button_text = "Retry"

class App extends React.Component {
    state = {
        lat: null,
        long: null
    }
    onRetryClicked = () => {
        if(this.state.lat !== null || this.state.long !== null) {
            this.props.fetchTemp(this.state.lat, this.state.long)
        } else {
            this.findCoordinates()
        }
    }

    findCoordinates = () => {
        Geolocation.getCurrentPosition(
            position =>{
                console.log("position: ", JSON.stringify(position))
                    this.setState({
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                    })
                    this.props.fetchTemp(this.state.lat, this.state.long)
            },
            error => {
                this.props.errorFetchingResult()
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    componentDidMount(){
        this.findCoordinates()
    }


    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                {this.props.isLoading?<LoaderScreen/>:
                this.props.isError? 
                <ErrorScreen 
                errorText={error_text} 
                buttonText={button_text} 
                onButtonClick ={()=> this.onRetryClicked()}/>:
                <ResultScreen 
                    currentTemp ={this.props.currentTemp}
                    cityName ={this.props.cityName}
                    next7dayData ={this.props.next7dayData}
                />}
            </SafeAreaView>
        )
    }
}

const mapStateToProps =(state) => ({
    isLoading: state.isLoading,
    isError: state.isError,
    currentTemp:  state.data.currentTemp,
    next7dayData: state.data.next7dayData,
    cityName: 'Some City'
})

const mapDispatchToProps = (dispatch) => ({
    fetchTemp: (lat, long) => dispatch(fetchTempData(lat,long)),
    errorFetchingResult: () => dispatch({type: ERROR_IN_DATA_LOADING}),
    setDataLoading: () => dispatch({type: TEMP_DATA_LOADING})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);