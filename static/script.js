const articles = [{
    "context" : "Another approach to brain function is to examine the consequences of damage to specific brain areas. Even though it is protected by the skull and meninges, surrounded by cerebrospinal fluid, and isolated from the bloodstream by the blood–brain barrier, the delicate nature of the brain makes it vulnerable to numerous diseases and several types of damage. In humans, the effects of strokes and other types of brain damage have been a key source of information about brain function. Because there is no ability to experimentally control the nature of the damage, however, this information is often difficult to interpret. In animal studies, most commonly involving rats, it is possible to use electrodes or locally injected chemicals to produce precise patterns of damage and then examine the consequences for behavior."
    ,"question" : "What sare the benifts of the blood brain barrir?" 
}, {"context" : "Motor systems are areas of the brain that are directly or indirectly involved in producing body movements, that is, in activating muscles. Except for the muscles that control the eye, which are driven by nuclei in the midbrain, all the voluntary muscles in the body are directly innervated by motor neurons in the spinal cord and hindbrain. Spinal motor neurons are controlled both by neural circuits intrinsic to the spinal cord, and by inputs that descend from the brain. The intrinsic spinal circuits implement many reflex responses, and contain pattern generators for rhythmic movements such as walking or swimming. The descending connections from the brain allow for more sophisticated control."
,
    "question" : "What muscles are the exception to the rule when it comes to motor neurons?"
},
    {"context" : "The brain is an organ that serves as the center of the nervous system in all vertebrate and most invertebrate animals. Only a few invertebrates such as sponges, jellyfish, adult sea squirts and starfish do not have a brain; diffuse or localised nerve nets are present instead. The brain is located in the head, usually close to the primary sensory organs for such senses as vision, hearing, balance, taste, and smell. The brain is the most complex organ in a vertebrate's body. In a typical human, the cerebral cortex (the largest part) is estimated to contain 15–33 billion neurons, each connected by synapses to several thousand other neurons. These neurons communicate with one another by means of long protoplasmic fibers called axons, which carry trains of signal pulses called action potentials to distant parts of the brain or body targeting specific recipient cells."
    ,
    "question" : "How are neurons connected?"}, 
    {"context" : "The SCN projects to a set of areas in the hypothalamus, brainstem, and midbrain that are involved in implementing sleep-wake cycles. An important component of the system is the reticular formation, a group of neuron-clusters scattered diffusely through the core of the lower brain. Reticular neurons send signals to the thalamus, which in turn sends activity-level-controlling signals to every part of the cortex. Damage to the reticular formation can produce a permanent state of coma."
,
    "question" : "How do the reticular neurons communicate with the thalamus?"
}, 
    {"context" : "The brain contains several motor areas that project directly to the spinal cord. At the lowest level are motor areas in the medulla and pons, which control stereotyped movements such as walking, breathing, or swallowing. At a higher level are areas in the midbrain, such as the red nucleus, which is responsible for coordinating movements of the arms and legs. At a higher level yet is the primary motor cortex, a strip of tissue located at the posterior edge of the frontal lobe. The primary motor cortex sends projections to the subcortical motor areas, but also sends a massive projection directly to the spinal cord, through the pyramidal tract. This direct corticospinal projection allows for precise voluntary control of the fine details of movements. Other motor-related brain areas exert secondary effects by projecting to the primary motor areas. Among the most important secondary areas are the premotor cortex, basal ganglia, and cerebellum."
    ,
    "question" : "What areas of the brain communicate to the primary motor cortex?"
}, 
    {"context" : "Devise Minority Party Strategies. The minority leader, in consultation with other party colleagues, has a range of strategic options that he or she can employ to advance minority party objectives. The options selected depend on a wide range of circumstances, such as the visibility or significance of the issue and the degree of cohesion within the majority party. For instance, a majority party riven by internal dissension, as occurred during the early 1900s when Progressive and regular Republicans were at loggerheads, may provide the minority leader with greater opportunities to achieve his or her priorities than if the majority party exhibited high degrees of party cohesion. Among the variable strategies available to the minority party, which can vary from bill to bill and be used in combination or at different stages of the lawmaking process, are the following:"
    ,
    "question" : "What is one common practice the minority party leader and his or her colleagues can use?"
}, 
    {"context" : "Devise Minority Party Strategies. The minority leader, in consultation with other party colleagues, has a range of strategic options that he or she can employ to advance minority party objectives. The options selected depend on a wide range of circumstances, such as the visibility or significance of the issue and the degree of cohesion within the majority party. For instance, a majority party riven by internal dissension, as occurred during the early 1900s when Progressive and regular Republicans were at loggerheads, may provide the minority leader with greater opportunities to achieve his or her priorities than if the majority party exhibited high degrees of party cohesion. Among the variable strategies available to the minority party, which can vary from bill to bill and be used in combination or at different stages of the lawmaking process, are the following:"
    ,
    "question" : "What is the party that is not the minority party?"
},{"context": "Second, Democrats have always elevated their minority floor leader to the speakership upon reclaiming majority status. Republicans have not always followed this leadership succession pattern. In 1919, for instance, Republicans bypassed James R. Mann, R-IL, who had been minority leader for eight years, and elected Frederick Gillett, R-MA, to be Speaker. Mann had angered many Republicans by objecting to their private bills on the floor; also he was a protégé of autocratic Speaker Joseph Cannon, R-IL (1903–1911), and many Members suspected that he would try to re-centralize power in his hands if elected Speaker. More recently, although Robert H. Michel was the Minority Leader in 1994 when the Republicans regained control of the House in the 1994 midterm elections, he had already announced his retirement and had little or no involvement in the campaign, including the Contract with America which was unveiled six weeks before voting day."
,"question": "How did Republicans feel about Mann in 1919?"
}
]

const context = document.getElementById("context"); 
const gen = document.getElementById("ref2"); 
const refresh = document.getElementById("ref1"); 
const question = document.getElementById('question');
context.addEventListener('input',changeColor);
gen.addEventListener("click",generate,true); 
refresh.addEventListener("click",refsh,true);

function refsh(){ 
    const answer = document.getElementById("answer");
    answer.value="";
    context.value = "" ;
    question.value = "" ;
    if(context.value.length<1) {
        context.style.borderColor = "#0a1b2e";
    }
}
    
function generate(){
    let elm =  articles[Math.floor(Math.random()*articles.length)];
    let paragraph = elm["context"]; 
    let quest = elm["question"];
    context.value = paragraph ;
    question.value = quest ; 

    if (context.value.length>1) {
        context.style.borderColor = "#93f729";
    }
}

function changeColor(event) {
    const el = event.target;
    el.style.borderColor = "#93f729";
    console.log(el.value);
    if(el.value.length<1) {
        el.style.borderColor = "#0a1b2e";
    }
}
