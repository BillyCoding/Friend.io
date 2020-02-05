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
        paddingVertical: 9,
        paddingHorizontal: 20,
        borderRadius: 0,
        //elevation:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
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
        paddingVertical: 10,
        fontFamily: 'Poppins-Bold',
        width: '80%',
        fontSize: 20,
        color: 'white',
        backgroundColor: '#6dcffc'
        
    }

}

export default global;