let headerAllJob2 = document.getElementById('h-all-job-count2');

let allJob = document.getElementById('all-job');
let headerAllJob1 = document.getElementById('h-all-job-count1');
    headerAllJob1.innerText = allJob.children.length;             //   set all job count
    headerAllJob2.innerText = allJob.children.length; 

//                 get tgl btn
let allBtnTgl    = document.getElementById('tgl-all');
let interBtnTgl  = document.getElementById('tgl-itrvew');
let rejectBtnTgl = document.getElementById('tgl-rjkt');

allBtnTgl.addEventListener('click', function() {
    let allPosts = document.getElementsByClassName('allPsts');
    
    for(let post of allPosts){
        post.classList.remove('hidden');
    }
    noDataA();
    yFoTtal ('c',0);
})
    
interBtnTgl.addEventListener('click', function() {
    let allPosts = document.getElementsByClassName('allPsts');
    let intPosts = document.getElementsByClassName('interview');
    
    for(let post of allPosts){
        post.classList.add('hidden');
    }
    
    for(let intPost of intPosts){
         intPost.classList.remove('hidden');
    }

    noDataI();
    let interviewCount = document.getElementsByClassName('interview').length;  //   cls COUNT IN NUM access
    noDataI2(interviewCount);

    yFoTtal('a',interviewCount);
    
})
    
rejectBtnTgl.addEventListener('click', function() {
    let allPosts = document.getElementsByClassName('allPsts');
    let rejPosts = document.getElementsByClassName('rejected');
    
    for(let post of allPosts){
        post.classList.add('hidden');
    }
    
    for(let rejPost of rejPosts){
        rejPost.classList.remove('hidden');
    }


    noDataR();
    let rejectedCount = document.getElementsByClassName('rejected').length;
    noDataR2(rejectedCount);

    yFoTtal('b',rejectedCount);
    
})

//                 onclick btn color
function btnColor(id){
    allBtnTgl.classList.remove('bg-blue-500','text-amber-50');
    interBtnTgl.classList.remove('bg-blue-500','text-amber-50');
    rejectBtnTgl.classList.remove('bg-blue-500','text-amber-50');

    let slctBtn= document.getElementById(id);

    slctBtn.classList.add('bg-blue-500','text-amber-50');

}

// update Status 
    function updateSttsI(n,bT){     //bT btn typ
        let normalBtn = document.getElementById('normal-'+n);
        let greenBtn = document.getElementById('green-'+n);
        let redBtn = document.getElementById('red-'+n);

        normalBtn.classList.add('hidden');
        greenBtn.classList.add('hidden');
        redBtn.classList.add('hidden');

        if(bT == 'i'){
            greenBtn.classList.remove('hidden');
        }
        else if(bT == 'r'){
            redBtn.classList.remove('hidden');
        }

    }

// for Intervies btn
function pstIBtnClk(id,n){
    let btnId = document.getElementById(id);
    btnId.parentElement.parentElement.classList.remove('rejected'); 
    btnId.parentElement.parentElement.classList.add('interview');
    updateValue();
    // update Status
    updateSttsI(n,'i');

    noDataI();
    let interviewCount = document.getElementsByClassName('interview').length;  //   cls COUNT IN NUM access
    noDataI2(interviewCount);

    hrdReLod();
}

// for Rejected btn
function pstRBtnClk(id,n){
    let btnId = document.getElementById(id);
    btnId.parentElement.parentElement.classList.remove('interview'); 
    btnId.parentElement.parentElement.classList.add('rejected');
    updateValue();
    // update Status
    updateSttsI(n,'r');

    noDataR();
    let rejectedCount = document.getElementsByClassName('rejected').length;
    noDataR2(rejectedCount);
    
    hrdReLod();
}


//   update head value
//                              get & count All + Interview + Rejected
function updateValue (){
    
    let allJob = document.getElementById('all-job');
    let headerAllJob1 = document.getElementById('h-all-job-count1');
    headerAllJob1.innerText = allJob.children.length;            //   set all job count
    headerAllJob2.innerText = allJob.children.length; 


    let headerInterview = document.getElementById('h-interview-job-count1');
    let headerRejected = document.getElementById('h-rejected-job-count1');
      
    let interviewCount = document.getElementsByClassName('interview').length;  //   cls COUNT IN NUM access
    let rejectedCount = document.getElementsByClassName('rejected').length;
    
    headerInterview.innerText = interviewCount;
    headerRejected.innerText = rejectedCount;
    
    headerAllJob1.innerText = allJob.children.length;            //   set all job count
    headerAllJob2.innerText = allJob.children.length; 
    

    noDataR2(rejectedCount);
    noDataI2(interviewCount);

}

//               delete function & updateValue
function dltTrs(id){
    let deleteP = document.getElementById(id);
    alert(`Do you want to remove 
        " ${deleteP.querySelector('h1').innerText } " ? `)
    deleteP.remove();

    updateValue ();
    noDataI2();
    noDataR2(); 
    noDataI();
    noDataR(); 
    noDataA();
    
    updateYOf();
}

//       no data
let noData = document.getElementById('no-data');

function noDataA(){
    if(allJob.children.length == 0){
        noData.classList.remove('hidden')
    }

    else if (allJob.children.length !== 0){
        noData.classList.add('hidden')
    }

}

// noData for interview 
let intCountInnerTxt = document.getElementById('h-interview-job-count1').innerText;
let rejCountInnerTxt = document.getElementById('h-rejected-job-count1').innerText;

function noDataI(){
    if(intCountInnerTxt == 0 && allJob.children.length !== 0){
        noData.classList.remove('hidden')
    }
}

function noDataR(){
    if(rejCountInnerTxt == 0 && allJob.children.length !== 0){
        noData.classList.remove('hidden')
    }
}


// noData for rejected
function noDataR2(N){
    if(N == 0 && allJob.children.length !== 0){
        noData.classList.remove('hidden')
    }

    else if(N>0){
        noData.classList.add('hidden')
    }
}
function noDataI2(N){
    if(N == 0 && allJob.children.length !== 0){
        noData.classList.remove('hidden')
    }

    else if(N>0){
        noData.classList.add('hidden')
    }
}


// y-of-total count
let yText = document.getElementById('y-of-total');
let intText = document.getElementById('int-job-count-of');

function yFoTtal (L,N){
    yText.classList.add('hidden');

    if(L == 'a'){
        yText.classList.remove('hidden');
        intText.innerText = N;
    }
    else if(L == 'b'){
        yText.classList.remove('hidden');
        intText.innerText = N;
    }

}

function updateYOf(){
    let intPosts = document.getElementsByClassName('interview');
    let rejPosts = document.getElementsByClassName('rejected');

    yFoTtal ('a',intPosts.length);
    yFoTtal ('b',rejPosts.length);
}


//                    hard reload 
function hrdReLod() {

    let tglAll = document.getElementById('tgl-all');
    let tglInt = document.getElementById('tgl-itrvew');
    let tglRej = document.getElementById('tgl-rjkt');

    let tglAlAct = tglAll.classList.contains('bg-blue-500');
    let tglInAct = tglInt.classList.contains('bg-blue-500');
    let tglReAct = tglRej.classList.contains('bg-blue-500');


    let alPsts = document.getElementsByClassName('allPsts');


for (let pst of alPsts) {
    
    if (tglAlAct) {
        pst.classList.remove('hidden');
    }

    if (tglInAct) {
        if (pst.classList.contains('interview')) {
            pst.classList.remove('hidden');
        } else {
            pst.classList.add('hidden');
        }
    } 

    if (tglReAct) {
        if (pst.classList.contains('rejected')) {
            pst.classList.remove('hidden');
        } else {
            pst.classList.add('hidden');
        }
    }
}

}