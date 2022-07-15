import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Result from './result';
 
let Alloptions;

const  shuffleArray=(array)=>{
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


const Quiz = ({navigation}) => {
  const [questions,setQuestions]=useState();
  const [ques,setques]=useState(0);
  const [option, setoption]=useState([]);
  const [score,setscore]=useState(0);
  const [isLoading,setisLoading]=useState(false)
  const getQuiz=async()=>{
   setisLoading(true);
     const url='https://opentdb.com/api.php?amount=10&category=17'
      try {

        const res=await fetch(url)
        const data=await res.json();
       setQuestions(data.results)
       Alloptions=data.results;
     
      generateOptionsAndShuffle(Alloptions[0])
      setisLoading(false);
      } catch (error) {
        console.log(error);
      }
   
    
    }
   
    // console.log( questions[0]);
  const generateOptionsAndShuffle=(_question)=>{
    const options =[..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options);
   setoption([...options]);
  }

  const handleNextPress=()=>{
    setques(ques+1);
    generateOptionsAndShuffle(Alloptions[ques+1]);
  
  }

  const handlePressOpt=(_option)=>{
    if(_option===questions[ques].correct_answer)
    {
      setscore(score+10);
    }
    
    if(ques <=8){
    setques(ques+1);
    generateOptionsAndShuffle(Alloptions[ques+1]);
    }
  }

 

 const pressEnd=()=>{
 
  // <Result score={score}/>
  navigation.navigate("Result",{
    score:score
  })
 }
  
const pressSkip=()=>{
  if(ques>0){
  setques(ques-1);
  generateOptionsAndShuffle(Alloptions[ques-1]);
  }
}


  useEffect(()=>{
    getQuiz()
    // generateOptionsAndShuffle();
  },[])
  return (
    <View>
    <View style={styles.container}>
    {isLoading ? <View style={styles.load}>
      <Text style={styles.loadTxt}>Loading...</Text>
    </View>: questions &&(
      <View>
    <View style={styles.top}>
      <Text style={styles.question}>Q.{ques+1}.{decodeURIComponent(questions[ques].question)}</Text>
      </View>

      <View style={styles.options}>
      <TouchableOpacity style={styles.btnOpt} onPress={()=>handlePressOpt(option[0])}>
      <Text style={styles.btnTextOpt}>A.{decodeURIComponent(option[0])}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnOpt} onPress={()=>handlePressOpt(option[1])}>
      <Text style={styles.btnTextOpt}>B.{decodeURIComponent(option[1])}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnOpt} onPress={()=>handlePressOpt(option[2])}>
      <Text style={styles.btnTextOpt}>C.{decodeURIComponent(option[2])}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnOpt} onPress={()=>handlePressOpt(option[3])}>
      <Text style={styles.btnTextOpt}>D.{decodeURIComponent(option[3])}</Text>
      </TouchableOpacity>

      </View>
      </View>
      )}
      </View> 

      {questions &&(<View style={styles.bottom}>
      {ques>0 && (<TouchableOpacity style={styles.btn}><Text style={styles.btnText}  onPress={()=>{pressSkip()}} >PREV</Text></TouchableOpacity>)}
     {(ques<9 && ques>=0) ?(<TouchableOpacity style={styles.btn}><Text style={styles.btnText} onPress={()=>{handleNextPress()}}>SKIP</Text></TouchableOpacity>):
   <TouchableOpacity style={styles.btn} 
    onPress={()=>{pressEnd()}} ><Text style={styles.btnText} >SHOW RESULT</Text></TouchableOpacity>
     }
   </View>
      )}
    </View>
    

    
     
    
  )
}

export default Quiz

const styles=StyleSheet.create({
  container:{
      //  padding: 12,
      //  height: '100%'
    paddingBottom:1,
    height:400
  },
  top:{
       marginVertical:16,
  },
  options:{
    marginVertical:8,
   
  
  },

  bottom:{
    // paddingVertical: 80,
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:230,
    
  },
  
  btn:{
    backgroundColor:"#2a9d8f",
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:10,
    alignItems:"center" 
  },
  btnText:{
   fontSize:18,
  color: "#edf6f9",
  letterSpacing:1
  },
  question:{
   fontSize:23,
   marginTop:20
  },
  btnTextOpt:{
    fontSize:19,
    fontWeight:"450"
  },

  btnOpt:{
     paddingVertical:20,
     backgroundColor:"#81b29a",
     marginVertical:6,
     paddingHorizontal:5,
     borderRadius:20,
  },

  load:{
    marginTop:300,
    alignItems:'center'
    
  },
   loadTxt:{
    fontSize:30,
   }

})