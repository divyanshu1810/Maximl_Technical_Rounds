import java.util.*;

class AnagramGroups {
    public static void main(String[] args) {
        String[] words = { "eat", "tea", "tan", "tab", "pest", "bat", "step" };
        // ArrayList<String>Strings> mainResult = new ArrayList<String>();
        HashSet<String> mainResult = new HashSet<String>();
        for (int x = 0; x < words.length; x++) {
            ArrayList<String> result = new ArrayList<String>();
            for (int y = 0; y < words.length; y++) {
                if (sort(words[x]).equals(sort(words[y])))
                    result.add(words[y]);
            }
            // System.out.println(result);
            mainResult.add(result.toString());
            // mainResult.add(result);
        }
        System.out.println(mainResult);
    }

    public static String sort(String word) {
        char[] wordArray = word.toCharArray();
        Arrays.sort(wordArray);
        return new String(wordArray);
    }
}
