class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   *
   * @param {String} word
   */
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode();
      }
      node = node.children[word[i]];
    }
    node.isEndOfWord = true;
  }

  /**
   *
   * @param {String} word
   * @returns {Boolean}
   */
  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        return false;
      }
      node = node.children[word[i]];
    }
    return node.isEndOfWord;
  }
  log() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}
const test = new Trie();

test.insert("lol");
test.insert("lob");
console.log(test.search("lol"));
console.log(test.search("loc"));
console.log(test.search("losq"));
console.log(test.search("qlol"));

// test.log();
