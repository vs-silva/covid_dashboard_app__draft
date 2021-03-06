const _storage = window.sessionStorage;

const _storageKeys = {
    selectedCountry: 'selectedCountry'
};

function isStorageAvailable()
{
    const test = "test";
    
    try{
        _storage.setItem(test, test);
        _storage.removeItem(test);
        return true;
    }
    catch(err)
    {
        return false;
    }
}

function setItem(keyPayload, valuePayload)
{
    if(isStorageAvailable() && keyPayload && valuePayload)
    {
        _storage.setItem(keyPayload.toString(), valuePayload.toString());
    }
}

function getItem(keyPayload)
{
    if(isStorageAvailable() && keyPayload)
    {
        return _storage.getItem(keyPayload.toString());
    }
}

function removeItem(keyPayload)
{
    if(isStorageAvailable() && keyPayload)
    {
        _storage.removeItem(keyPayload.toString());
    }
}



const _common_module = {
    keys: _storageKeys,
    setItem,
    getItem,
    removeItem
};

export default _common_module;