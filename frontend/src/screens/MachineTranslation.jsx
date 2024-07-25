import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MachineTranslationScreen = () => {
  const [sourceLanguage, setSourceLanguage] = useState('english');
  const [targetLanguage, setTargetLanguage] = useState('hindi');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const languagePairToModelName = {
    'english-hindi': 'English2Hindi',
    'soliga-english': 'Soliga2English',
    'english-kannada': 'English2Kannada',
    'english-kui': 'English2Kui',
    'english-lambani': 'English2Lambani',
    'english-mundari': 'English2Mundari',
    'english-soliga': 'English2Soliga',
    'hindi-english': 'Hindi2English',
    'lambani-english': 'Lambani2English',
    'ori-english': 'Ori2English',
    
    // Add more mappings as needed
  };

  const handleTranslation = async () => {
    setLoading(true);
    try {
      const modelName = languagePairToModelName[`${sourceLanguage}-${targetLanguage}`];
      const response = await axios.post(
        'https://sitar.iitdh.ac.in/api/translate/',
        {
          source_language: sourceLanguage,
          target_language: targetLanguage,
          source_text: inputText,
          model_name: modelName
        }
      );
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error('Error translating text:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearText = () => {
    setInputText('');
    setTranslatedText('');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: "#007bff" }}>Machine Translation</h1>
      <h3 className="text-center mb-4">Let's translate from text to text</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="sourceLanguage" className="form-label">Source Language:</label>
            <select
              id="sourceLanguage"
              className="form-select"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="lambani">Lambani</option>
              <option value="ori">Ori</option>
              <option value="soliga">Soliga</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="inputText" className="form-label">Input Text:</label>
            <textarea
              id="inputText"
              className="form-control"
              rows="6"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="targetLanguage" className="form-label">Target Language:</label>
            <select
              id="targetLanguage"
              className="form-select"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              <option value="hindi">Hindi</option>
              <option value="kannada">Kannada</option>
              <option value="kui">Kui</option>
              <option value="english">English</option>
              <option value="lambani">Lambani</option>
              <option value="mundari">Mundari</option>
              <option value="soliga">Soliga</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <h5 className="text-center mb-2">Output:</h5>
          <div className="border rounded p-3" style={{ minHeight: '160px' }}>
            {translatedText ? (
              <p className="text-center">{translatedText}</p>
            ) : (
              <p className="text-center text-muted">Translation will appear here.</p>
            )}
          </div>
        </div>
        <div className="text-center mb-3">
            <button
              className="btn btn-primary m-2"
              onClick={handleTranslation}
              disabled={loading || !inputText}
              style={{ backgroundColor: '#007bff', borderColor: '#007bff', padding: '8px 16px' }}
            >
              {loading ? 'Translating...' : 'Translate It'}
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={handleClearText}
              disabled={loading || !inputText}
              style={{ backgroundColor: '#007bff', borderColor: '#007bff', padding: '8px 16px' }}
            >
              Clear Text
            </button>
          </div>
      </div>
      <div className="text-center mt-4">
        <Link className="btn btn-light" to="/demo">Go Back</Link>
      </div>
    </div>
  );
};

export default MachineTranslationScreen;