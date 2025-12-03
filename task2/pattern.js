

  function main(){
          let n=6;
          let k=10;
          pattern1(n);
          pattern2(n);
         pattern3(n);
         pattern4(n);
         pattern5(k);

    }

   function pattern5(n) {
        for(let i=0;i<n;i++){
            let line=""
            for(let j=n-i;j>=1;j--){
                line+=" "
               
            }
            for(let j=0;j<=i;j++){
                line+="*"
               
            }

            for(let k=1;k<=i;k++){
              line+="*"
            }
            console.log(line);
            
        }
    
        for(let i=n-1;i>0;i--){
             let line="";
            for(let j=n-i;j>=0;j--){
                line+=" "
            }
            for(let k=0;k<i;k++){
                line+="*"
            }
            for(let l=i-2;l>=0;l--){
              line+="*"
            }
            console.log(line);
            
        }

    }

    function pattern4( n) {
        for(let i=0;i<n;i++){
            let line="";
            for(let  j=n-i;j>=1;j--){
               line+=" "
            }
            for(let j=0;j<=i;j++){
               
                line+="*"
            }

           for(let k=1;k<=i;k++){
               
               line+="*";
           }
            console.log(line);
            
        }
    }

    function pattern3(n) {
        for(let i=0;i<n;i++){
            let line=""
            for(let j=n-i;j>=1;j--){
                line+=" "
            }
            for(let j=0;j<=i;j++){
                line+="*"
            }

          console.log(line);
          

        }
    }

    function pattern2(n) {
        for(let i=0;i<n;i++){
            let line=" "
            for(let j=0;j<=i;j++){
              line+="*"
            }
          console.log(line);
        }
    }

   function pattern1(n) {
        for(let i=0;i<n;i++){
            let line=""
            for(let j=n-i;j>=1;j--){
               line+="*";
            }
           console.log(line);
           
        }
    }
    main();

