class SPTX{
    synth;
    constructor(word){
        this.word = word
    }
    talk(){
        this.synth = new SpeechSynthesisUtterance(this.word)
        window.speechSynthesis.speak(this.synth)
    }
}
