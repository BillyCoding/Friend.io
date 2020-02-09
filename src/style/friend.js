const global = {
    safeArea:{
        flex: 1,
        backgroundColor: '#fafafa',
        paddingHorizontal: 0,
    },
    Body:{
        //backgroundColor: 'yellow',
        height: '100%',
        paddingVertical: 0
    },
    friendContainer:{
        display: 'flex',
        //backgroundColor: '#addaff',
        marginVertical: 1,
        paddingVertical:10,
        paddingHorizontal: 20,
        borderRadius: 0,
        //elevation:1,
        flexDirection: 'row',
    },
    friendImage:{
        width: 40, 
        height:40, 
        borderRadius:100,
        marginRight: 20,
        
    },
    friendName:{
        color:'black',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        justifyContent: 'center',
        alignContent: 'center',
    },
    friendLocation:{
        fontFamily: 'Poppins-Italic',
        color: '#555',
        fontSize:10
    },
    title:{
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: 'white',
        marginLeft: 30,
        //backgroundColor: '#444'
        
    },
    
    friendOptions:{
        backgroundColor: '#5bc4f5',
        width: 40, 
        height:40, 
        borderRadius:100,
        marginRight: 20,
        alignItems: 'center', justifyContent: 'center'
    }

}

export default global;