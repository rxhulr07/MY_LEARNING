// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler
using System;
using System.Collections;

public class CharOccu
{
    public static void Main(string[] args)
    {
        string inp = "hello rahul";
       Hashtable ht = new Hashtable();
       
      foreach( char c in inp){
          if(c == ' ') continue;
          
          if(ht.ContainsKey(c)){
              ht[c] = (int)ht[c]+1;
          }else{
              ht[c] =1;
          }
      }
      
      foreach(DictionaryEntry c in ht){
          Console.WriteLine(c.Key +":"+ c.Value);
      }
       
    }
}