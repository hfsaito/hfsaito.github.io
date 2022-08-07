export enum STORAGE_KEY {
  GANK_LIST = 'gank-list'
}

const mapKeyType: {
  [key in STORAGE_KEY]: string | number | null | undefined | symbol | object
} = {
  [STORAGE_KEY.GANK_LIST]: '',
}

export const NewStorage = {
  set<K extends STORAGE_KEY>(key: K, value: typeof mapKeyType[K]): void {
    localStorage.setItem(key, String(value));
  },
  get<K extends STORAGE_KEY>(key: K): typeof mapKeyType[K] {
    return localStorage.getItem(key);
  }
};