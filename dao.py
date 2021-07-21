import cx_Oracle
# from dto import * 
import json
import collections

class MemberDAO:
    def memid(self, user_pw):  

        data = ''
        try:
            conn = cx_Oracle.connect(user="SCOTT", password="TIGER", dsn="xe")
            # conn = cx_Oracle.connect("scott/tiger@localhost/xe")
            cur = conn.cursor()

            try:
                cur.execute("select ID from usertb where PW=:mpw", mpw=user_pw)
                row = cur.fetchone()
                data = row[0]

            except Exception as e:
                print(e) 

        except Exception as e:
            print(e) 

        finally:
            cur.close() 
            conn.close()
    
        return data