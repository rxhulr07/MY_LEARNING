public class Largestele {

    static int largestele(int [] arr){
        int max = Integer.MIN_VALUE;

        for(int i =0; i<arr.length; i++){
             max = Math.max(max, arr[i]);
        }

        return max;
    }

    public static void main(String[] args) {
         int [] arr = {1 ,15 , 7, 8, 10};

        System.out.println(largestele(arr));
        
    }
}