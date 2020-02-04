const global = {
    safeArea:{
        flex: 1,
        backgroundColor: '#fafafa',
        paddingHorizontal: 10,
    },
    Body:{
        //backgroundColor: 'yellow',
        height: '100%',
        paddingVertical: 10
    },
    friendContainer:{
        display: 'flex',
        backgroundColor: '#f5f5f5',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        //elevation:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    friendImage:{
        width: 50, 
        height:50, 
        borderRadius:100,
        marginRight: 20,
    },
    friendName:{
        color:'black',
        //backgroundColor: 'yellow',
        fontWeight: 'bold',
        fontSize: 18
    },
    friendLocation:{
        fontWeight: 'italic',
        color: '#555',
        fontSize:10
    },
    title:{
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: 'bold',
        fontSize: 20,
        
    }

}

export default global;