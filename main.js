function startClassification() {
    navigator.mediaDevices.getUserMedia();
    navigator.mediaDevices.getUserMedia({audio: true})
    let classifier;
    let modelURL = 'Your_model_link/model.json';
    classifier = ml5.soundClassifier(modelURL, modelReady);
  
function modelReady() {
    classifier.classify(gotResults);
}
  
function gotResults(error, results) {
    console.log('got result', results);
}
}
