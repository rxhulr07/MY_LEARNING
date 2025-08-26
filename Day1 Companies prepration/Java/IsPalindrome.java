public class IsPalindrome {

    static boolean Ispalindrome(String s){

       
        String str = s.replaceAll("[^a-zA-z0-9]", "").toLowerCase();
        String Reversed = new StringBuilder(str).reverse().toString();
       

        if(str.equals(Reversed)) return true;


        return false;
    }

    public static void main(String[] args) {

        System.out.println(Ispalindrome(""));
        
    }
    
}
