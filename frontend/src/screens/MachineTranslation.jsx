import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MachineTranslationScreen = () => {
  const [sourceLanguage, setSourceLanguage] = useState('english');
  const [targetLanguage, setTargetLanguage] = useState('hindi');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslation = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://10.195.250.59:9000/api/translate/',
        {
          source_language: sourceLanguage,
          target_language: targetLanguage,
          source_text: inputText // Pass source_text instead of text
        }
      );
      setTranslatedText(response.data.translated_text); // Set translated_text from response
    } catch (error) {
      console.error('Error translating text:', error);
      // Handle error (e.g., show error message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ padding: '10px' }}>Machine Translation</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="sourceLanguage">Source Language:</label>
            <select
              id="sourceLanguage"
              className="form-control"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              <option value="english">English</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="targetLanguage">Target Language:</label>
            <select
              id="targetLanguage"
              className="form-control"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              <option value="hindi">Hindi</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputText">Input Text:</label>
            <textarea
              id="inputText"
              className="form-control"
              rows="4"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{ marginBottom: '10px' }}
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            onClick={handleTranslation}
            disabled={loading || !inputText}
            style={{ backgroundColor: '#007bff', borderColor: '#007bff', padding: '8px 16px', marginBottom: '10px' }}
          >
            {loading ? 'Translating...' : 'Translate It'}
          </button>
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