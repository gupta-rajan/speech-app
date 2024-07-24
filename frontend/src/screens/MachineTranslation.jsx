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
        'https://sitar.iitdh.ac.in/mt/api/translate',
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
      <h1 className="text-center mb-4" style={{ padding: '10px', color: "#007bff" }}>Machine Translation</h1>
      <div className="row justify-content-center rounded-lg shadow-lg p-4 bg-white">
        <div className="col-md-6">
          <h3 className="text-center text-3xl font-bold text-blue-700 mb-6">Let's translate from text to text</h3>
          <div className="form-group">
            <label htmlFor="sourceLanguage" className="mt-2 mb-1">Source Language:</label>
            <div className="input-group">
              <select
                id="sourceLanguage"
                className="form-control"
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
              <span className="input-group-text"><i className="fa fa-chevron-down"></i></span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="targetLanguage" className="mt-2 mb-1">Target Language:</label>
            <div className="input-group">
              <select
                id="targetLanguage"
                className="form-control"
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
              <span className="input-group-text"><i className="fa fa-chevron-down"></i></span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputText" className="mt-2 mb-1">Input Text:</label>
            <textarea
              id="inputText"
              className="form-control"
              rows="4"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{ marginBottom: '10px' }}
            ></textarea>
          </div>
          <div className="text-center m-1">
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
          <div className="mt-3" style={{ border: '1px solid #007bff', borderRadius: '5px', padding: '10px' }}>
            {translatedText && (
              <div>
                <h5 style={{ padding: '5px', textAlign: 'center' }}>Output:</h5>
                <p style={{ textAlign: 'center' }}>{translatedText}</p>
              </div>
            )}
            {!translatedText && (
              <p className="text-muted text-center">Translation will appear here.</p>
            )}
          </div>
          <div className="mt-6 text-center">
            <Link className="btn btn-light my-3" to="/demo">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineTranslationScreen;